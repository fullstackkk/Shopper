export default async function getHeadphones(){
    let data = []

    try{
        let response = await fetch('http://localhost:8000/headphones')
        if(response.ok){
            console.log(`Загружено c статусом ${response.status}`)
            data = await response.json()
            return data
        }
    }catch{
        throw new Error('Возникла ошибка')
    }       
}