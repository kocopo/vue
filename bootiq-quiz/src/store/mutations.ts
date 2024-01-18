import Category from "@/components/model/Category";
import Question from "@/components/model/Question";

export default{
    // eslint-disable-next-line
    parseArray(state: any, payload: string[]): void{
        let i = 0;
        let cycles = 0;
        const categories: Category[] = [];
        
        while(cycles < 5){
            const category: Category = {
                name: payload[i],
                questions: []
            }
            for(let j = i + 1; j < i + 15; j+=3){
                let splitAnswers = payload[j+1].split(';');
                splitAnswers = splitAnswers.filter(a => a !== '');
                const question : Question = {
                    id: j,
                    questionText: payload[j],
                    answers: splitAnswers,
                    value: parseInt(payload[j+2])
                }
                category.questions.push(question);
            }
            categories.push(category);
            i = i + 16;
            cycles++;
        }
        state.categories = categories;
    },
    // eslint-disable-next-line
    clearCategories(state: any): void{
        state.categories = [];
    }
}