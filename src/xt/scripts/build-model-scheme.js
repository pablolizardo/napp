const fs = require('fs');
const ts = require('typescript');
const jsonSchemaToTS = require('json-schema-to-typescript');

// Definir el modelo de datos de manera programática
const modelo = {
    type: 'object',
    properties: {
        appName: { type: "string" },
        appDescription: { type: 'string' },
        styling: {
            type: "object",
            properties: {
                theme: { "type": "string" },
                rounded: { "type": "string" },
                baseSize: { "type": "string" },
                gap: { "type": "string" },
                sectionGap: { "type": "string" }
            },
            required: ["theme", "rounded", "baseSize", "gap", "sectionGap"]
        },
    },
    "pages": {
        "type": "array",
        "items": [
            {
                "type": "object",
                "properties": {
                    "slug": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "loading": {
                        "type": "boolean"
                    },
                    "error": {
                        "type": "boolean"
                    },
                    "fetchData": {
                        "type": "string",
                        "required": [
                            "client",
                            "server",
                            "none"
                        ]
                    },
                    "revalidatePattern": { "type": "string" },
                    "generateStaticPaths": { "type": "string" }
                }
            }
        ]
    },

    required: ['appName', 'appDescription', 'styling', 'pages'],
};

// Convertir el JSON Schema a TypeScript
jsonSchemaToTS.compile(modelo, 'xtConfig')
    .then(tsCode => {
        // Guardar las definiciones de tipos TypeScript en un archivo
        fs.writeFileSync('./src/xt/types/xt-config.d.ts', tsCode);

        // Generar el JSON Schema
        const jsonSchema = JSON.stringify(modelo, null, 2);
        fs.writeFileSync('./src/xt/types/xt-config.schema.json', jsonSchema);

        console.log('Archivos generados exitosamente: modelo.ts y modelo-schema.json');
    })
    .catch(error => console.error('Error al generar archivos:', error));
