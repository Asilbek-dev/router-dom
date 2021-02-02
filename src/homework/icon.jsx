const Icon = ({width,path,height,color,viewBox}) => {
    return ( 
        <>
            <svg width = {width} height = {height} viewBox = {viewBox}>
                <path d={path} fill = {color}/>
            </svg>
            <svg>
                width = {width}
                height = {height}
                xmlns = 'http://www.w3.org/2000/svg'
                "viewBox":"0 12.705 512 486.59"
                <path fill={color} fill-rule="evenodd" d=''></path>
            </svg>
        </>
    );
}
 
export default Icon;