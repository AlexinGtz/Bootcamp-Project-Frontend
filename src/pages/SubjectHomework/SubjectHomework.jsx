import "./SubjectHomework.css";
import { AppBanner } from "../../components/AppBanner/AppBanner";
import { StudentHomeworkCard } from "../../components/StudentHomeworkCard/StudentHomeworkCard";
import { API } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const APIConnection = new API();


export const SubjectHomework = () => {
    //Code
    const [ homeworks, setHomeworks ] = useState([])
    const [ subjectName, setSubjectName ] = useState('')
    const [ userGrade, setUserGrade ] = useState('')
    const { subjectId } = useParams()

    useEffect(()=> {
        getHomeworks();
    }, [])
    
 
    const getHomeworks = async () => {
        const homeworkRes = await APIConnection.subjectHomework(subjectId);
        setHomeworks(homeworkRes.data.homeworks)
        setSubjectName(homeworkRes.data.subjectName)
        setUserGrade(homeworkRes.data.userGrade)

        }
    
    let submittedHomeworks = []
    let pendingHomeworks = []

    homeworks.forEach((element) => {
        element.pending ? pendingHomeworks.push(element) : submittedHomeworks.push(element)   
    })

    console.log("Submitted:", submittedHomeworks)
    console.log("Pending:", pendingHomeworks)
    
     
    return (
        <div className="subjectDetailsContainer">
            <AppBanner /> 
            <div className="subjectContainer">
               
                <div className="subjectTitleContainer">
                    <h1>{subjectName}</h1>
                </div>
               
                <div className="subjectAverageContainer">
                    <h1>Promedio: {userGrade}</h1>
                </div>

            </div>

            <div className="homeworksContainer">

                <div className="handledHomeworkContainer">
                    <h2>Tareas Entregadas</h2>
                 
                    {
                        submittedHomeworks.map((item) =>
                            < StudentHomeworkCard homework = {item} />
                        )
                    }
               </div>
                
                <div className="pendingHomeworkContainer">
                    <h2>Tareas Pendientes</h2>
                    
                    {
                        pendingHomeworks.map((item) =>
                            < StudentHomeworkCard homework = {item} />
                        )
                    }
                </div>

            </div>
            
        </div>
    );
};

