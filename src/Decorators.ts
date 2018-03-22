export function displayClassName(target: any) {
    console.log(`Class Name: ${target.name}`)
}

export function displayClassNameWithPurpose(purpose: string) {
    return (target: any) => {
        console.log(`Class Name: ${target.name}\nPurpose: ${purpose}`);

    }
}