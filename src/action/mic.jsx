export const MICOFF = "action/MICOFF"

export const MICON = 'action/MICON'

export const MicOfffunc = ()=>{
    return {
        type: MICOFF
    }
}
export const MicOnfunc = ()=>{
    return {
        type: MICON
    }
}
export const micOffAsync = ()=> dispatch =>{
    setTimeout(()=>dispatch(MicOfffunc()),5000)
}
export const micOnAsync = ()=> dispatch =>{
    setTimeout(()=>dispatch(MicOnfunc()),5000)
}