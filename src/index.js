import fonts from '../fonts'

const initFont = (jsPDFAPI, fontFamily = 'Microsoft YaHei') => {
    if (!jsPDFAPI) {
        return
    }
    const font = fonts[fontFamily]
    var callAddFont = () => {
        this.addFileToVFS(`${fontFamily}.ttf`, font);
        this.addFont(`${fontFamily}.ttf`, fontFamily, 'normal');
    };
    jsPDFAPI.events.push(['addFonts', callAddFont])
}

export { initFont }