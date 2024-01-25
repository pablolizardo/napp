#!/bin/bash

echo "hola"

# Lee el contenido del archivo JSON en una variable
json_content=$(cat /ruta/al/archivo/xt.config.json)

# Extrae la información específica utilizando jq
pages=$(echo "$json_content" | jq -r '.pages')

for page in $(echo "${pages}"); do
    echo "${page[name]}"
    echo "test"

    sanitizedName=$(generateSlug "${page[name]}")
    mkdir -p "src/app/(site)/${sanitizedName}"

    templateName="${page[template]}"
    content=$(<"src/xt/templates/pages/${templateName}.tsx")

    case "${page[fetchData]}" in
    "server")
        content="${content//@xt-use-client/}"
        content="${content//@xt-imports/}"
        content="${content//@xt-fetch-outside/${fetchServerOutside}/}"
        content="${content//@xt-fetch-inside/${fetchServerInsidePage}/}"
        content="${content//const Page = () => {/${fetchServerFunctionSign}/}"
        ;;
    "client")
        content="${content//@xt-use-client/'use client'/}"
        content="${content//@xt-imports/${fetchClientImports}/}"
        content="${content//@xt-fetch-outside/}"
        content="${content//const Page = () => {/${fetchClientFunctionSign}/}"
        content="${content//@xt-fetch-inside/${fetchClientInsidePage}/}"
        ;;
    "none")
        content="${content//@xt-use-client/}"
        content="${content//@xt-imports/}"
        content="${content//@xt-fetch-outside/}"
        content="${content//@xt-fetch-inside/}"
        ;;
    *)
        content="${content//@xt-use-client/}"
        content="${content//@xt-imports/}"
        content="${content//@xt-fetch-outside/}"
        content="${content//@xt-fetch-inside/}"
        ;;
    esac

    echo "$content" >"src/app/(site)/${sanitizedName}/page.tsx"

    if [ "${page[loading]}" == true ]; then
        loadingContent=$(<"src/xt/templates/generics/loading.tsx")
        echo "$loadingContent" >"src/app/(site)/${sanitizedName}/loading.tsx"
    fi

    if [ "${page[error]}" == true ]; then
        errorContent=$(<"src/xt/templates/generics/error.tsx")
        echo "$errorContent" >"src/app/(site)/${sanitizedName}/error.tsx"
    fi
done
