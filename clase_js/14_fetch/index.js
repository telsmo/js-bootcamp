const crearDiv = (actividad, tipo)=>{
    let actividades = document.getElementById("actividades");
    let div = document.createElement('div');
    div.classList.add("actividad");
    div.innerText=`${tipo}: ${actividad}`;

    actividades.appendChild(div);
}
const getActivity = ()=>{
    const URL = "https://www.boredaphhhhhhhhi.com/api/activity/";
    fetch(URL).then((res)=>{
        console.log(res);
        res.json().then((data)=>{
            console.log(data);
            const {activity,type} = data;
            crearDiv(activity, type);
    
        }).catch((err)=>{
            console.error(err);
        })
    
    }).catch((err)=>{
        console.error(err);
        crearDiv("Cannot fetch API","Error")
    })
}
