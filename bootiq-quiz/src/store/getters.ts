import Category from "@/components/model/Category"
export default{
    // eslint-disable-next-line
    categories(state: any): Category[]{
        // const categories: Category[] = [];
        // let idCounter = 0;
        // for(let i = 1; i < 6; i++){
        //     const category: Category = {
        //         name: 'Category Category Category Category' + i,
        //         questions: []
        //     }
        //     for(let j = 1; j < 6; j++){
        //         category.questions.push({
        //             id: idCounter,
        //             questionText: 'JádyJádaJada Tohle je moje otázka, jak se ti líbí člověče ? doufám že dost, protože jestli ne tak se vůbec nic nestane',
        //             value: j * 100
        //         });
        //         idCounter++;
        //     }
        //     categories.push(category);
        // }
        // console.log(categories);
        // return categories;
        return state.categories;
    }
}