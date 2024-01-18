const displaycontent = (content) => {
    // GEt id of input box

    result.value += content

}

const clearscreen = () => {
    result.value = ""
}

const finalresult = () => {
    try { result.value = eval(result.value) }
    catch {
        result.value = "Error"
    }
}

const remove = () => {
    result.value = result.value.slice(0, -1)
}