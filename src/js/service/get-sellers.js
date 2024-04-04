export default async function getSellers(){
    let data = []

    try{
        let response = await fetch('http://localhost:8000/sellers/get-list')
        if(response.ok){
            console.log(`Загружено c статусом ${response.status}`)
            data = await response.json()
            return data
        }
    }catch{
        throw new Error('Возникла ошибка')
    }       
}