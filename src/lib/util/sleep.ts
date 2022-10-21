const sleep = (millis : number) => {
    return new Promise((r) => setTimeout(r, millis));
}

export default sleep;