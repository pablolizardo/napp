import { statSync } from "fs"
import { readFile, readdir, writeFile } from "fs/promises"
import { revalidatePath } from "next/cache";
import path from "path"
import React from "react";


export const handleSetLandingComponent = async (formData: FormData) => {

    'use server'
    const section = formData.get('section')
    const component = formData.get('component')
    console.log('section', section)
    console.log('component', component)
    return
    // const componentRendered = React.lazy(() => import(`@/xt/templates/components/landing/${section}-${component}.tsx`))

    const filePath = 'src/app/page.tsx';
    const content = await readFile(filePath, 'utf8');
    const updatedContent = content.replace(section, component);
    await writeFile(filePath, updatedContent, 'utf8');
    revalidatePath('/admin');

}

