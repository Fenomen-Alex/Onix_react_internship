const tr = {
    en:{
        NineLessonText: {
            title: "TECT",
            text1: "text1",
        }
    },
    ru:{
        NineLessonText: {
            title: "TECT",
            text1: "text1",
        }
    }
}
const getTranslation = (language, name)=>{
   return  tr[language][name];
}
export default getTranslation;