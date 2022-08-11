import { useLazyQuery, useMutation } from "@apollo/client";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import { GET_DIMENSIONS } from "./query.gql";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CREATE_INDICATOR, UPDATE_INDICATOR } from "./mutation.gql";


const validationEmailForm = yup
  .object({
    indicator: yup
      .string()
      .min(6, "Indicador precisa ter mais de 6 caracteres")
      .required("Indicador é obrigatorio"),      
  })
  .required();


const IndicatorForm = ({indicator, setIndicator, indicators, setIndicators}) => {
  const jwt = localStorage.getItem("jwtToken");
  const [dimensions,setDimensions] = useState([])
  const [btnName, setBtnName] = useState("Adicionar")

  const [getDimensions] = useLazyQuery(GET_DIMENSIONS)
  const [createIndicator] = useMutation(CREATE_INDICATOR)
  const [updateIndicator] = useMutation(UPDATE_INDICATOR)


  const handleChangeDimension = e => {
    setIndicator(i => {
      return {
        ...i,
        dimension: e.target.value,
      }
    })
  }

  const handleChangeIndicator = e => {
    setIndicator(i => {
      return {
        ...i,
        indicator: e.target.value
      }
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });


  useEffect(()=>{
    getDimensions({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: 'network-only'
    }).then(data => {
      
      setDimensions(data.data.dimensions.data)
    }).catch(error => {
      toast.error("Ocorreu um erro ao carregar a lista de dimensao")
    })

    if(indicator.id !== '')
      setBtnName("Actualizar")

  },[])

    const formIndicator = formData => {
      
      if(indicator.id === ''){
        
        createIndicator({
          variables: {
            "data": {
              "indicator": formData.indicator,
              "dimension": indicator.dimension
            }
          },
          context: {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          },
        }).then(data => {
          
          let obj = indicators.filter(i => i.id !== indicator.id)
          obj.push(data.data.createIndicator.data)
          setIndicators(obj);
          document.getElementById("indicator").value = '';
          setIndicator(i => {
            return {
              id: '',
              indicator: '',
              dimension: ''
            }
          })
          toast.success("Indicador adicionado com sucesso!!")
        }).catch(error => {
          toast.error("Ocorreu um erro ao adicionar indicador")
        })

      }else{
        
          updateIndicator({
            variables: {
              "updateIndicatorId": indicator.id,
                "data": {
                "indicator": formData.indicator,
                "dimension": indicator.dimension
              }
            },
            context: {
              headers: {
                authorization: `Bearer ${jwt}`,
              },
            },
          }).then(data => {
            
            let obj = indicators.filter(i => i.id !== indicator.id)
            obj.push(data.data.updateIndicator.data)
            setIndicators(obj);
            toast.success("Indicador foi actualizado com sucesso!!")
          }).catch(error => {
            toast.error("Ocorreu um erro ao atualizar indicador!!")
          })


      }
    }


    return (
        
      <form onSubmit={handleSubmit(formIndicator)} noValidate>
        <Grid container spacing={3} style={{marginTop: '5px'}}>
          
          
          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Dimensao</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="dimension"
                value={indicator.dimension}
                label="Dimensao"
                name='dimension'
                onChange={handleChangeDimension}
              >
                {
                  dimensions && dimensions.map(dimension => (
                    <MenuItem key={dimension.id} value={dimension.id}>
                    {dimension.attributes.dimension}
                  </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              multiline
              rows={2}
              label="Indicador"
              defaultValue={indicator.indicator}
              fullWidth
              type="text"
              name="indicator"
              id="indicator"
              onChange={handleChangeIndicator}
              {...register("indicator")}
              helperText={errors.indicator?.message}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" size="large" variant="contained" fullWidth>
              {btnName}
            </Button>
            <ToastContainer />
          </Grid>
        </Grid>
      </form>
    
    );
}
 
export default IndicatorForm;