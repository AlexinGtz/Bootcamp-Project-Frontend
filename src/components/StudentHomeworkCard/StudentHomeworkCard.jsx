import './StudentHomeworkCard.css'
import submittedHomework from '../../assets/images/submitted.png'


export const StudentHomeworkCard = ({homework}) => {
    let label;
    let date;
    if(homework.pending === false){
        date  = new Date(homework.submittedDate).toLocaleDateString()
        label = "Submitted"         
    }
    else 
    {
        date = new Date(homework.dueDate).toLocaleDateString()
        label = "Due" 
    }

    return (
        <div className='studentHomeworkCardContainer'>
           <p>{homework.name}</p>
           <p>{homework.description}</p>
           <p>{label}</p>
           <p>{date}</p> 
           { 
             !homework.pending ?          
              <div>  
                <img className='submittedHomeworkImage' src={submittedHomework} alt='Submitted homework'/> 
                <p>{homework.grade}</p> 
             </div>     
            :
                <div>
                    <button type="button" className='sendHomeworkButton'>Send homework</button>
                </div>
           }
        </div>
    );
}