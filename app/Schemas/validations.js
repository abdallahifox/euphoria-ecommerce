import * as Yup from 'yup'

 const registertaionValidation = Yup.object().shape({
    email:Yup.string().required('Required').email('Must be a Valid Email').trim('Must Have no white space'),
    password:Yup.string().required('Required').min(8,'Use 8 or more characters with a mix of letters, numbers & symbols')
})

export{
    registertaionValidation
}