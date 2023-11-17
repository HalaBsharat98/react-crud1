


export default function Input(props){
  
    const {id,title,type,name,changeData,customClasses,errors}=props;

    return(
        <div className="mb-3">
        <label htmlFor={id} className="form-label">{title}</label>
        <input type={type} name={name} className={`form-control ${customClasses}`} id={id}  onChange={changeData} />
        {errors[name] && <p className="text-danger"> {errors[name]}</p>}
    </div>
    )
}