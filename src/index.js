import fonts from '../fonts'

const initFont = (jsPDFAPI, fontFamily = 'Microsoft YaHei') => {
    if (!jsPDFAPI) {
        return
    }
    const font = fonts[fontFamily]
    var callAddFont = function() {
        this.addFileToVFS(`${fontFamily}-normal.ttf`, font);
        this.addFont(`${fontFamily}-normal.ttf`, fontFamily, 'normal');
    };
    jsPDFAPI.events.push(['addFonts', callAddFont])
}

export default initFont