    async function fetchData() {
        try {
            
            const response = await fetch(`https://www.moogleapi.com/api/v1/characters/search?origin=6`, { mode: 'cors' });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            const characters = ["Terra", "Locke", "Celes", "Edgar", "Sabin", "Mog", "Umaro", "Relm", "Shadow", "Kefka", "Gau", "Setzer"]
            const cardData = [];
            characters.forEach(lname => {
                
                const charToAdd = data.find(el => el.name === lname);
    
                if (charToAdd !== null) {
                    cardData.push({ id: charToAdd.id, name: charToAdd.name, imgurl: charToAdd.pictures[0].url });
                }
                    
                })  ;
            
            return cardData;
        } catch (error) {
            
            console.error("Error fetching data: ", error);
            return [];
        }
    }
    
    export default fetchData;


   
    

    