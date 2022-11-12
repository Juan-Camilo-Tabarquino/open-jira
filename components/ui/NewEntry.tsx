import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useState } from 'react';

export const NewEntry = () => {

  const [isAdding, setIsAdding] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <Box sx={{marginBottom:2, paddingX:1}}>

        {

            isAdding ? (
                <>
                
                    <TextField
                        fullWidth
                        sx={{
                            marginTop: 2,
                            marginBottom: 1,
                        }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={ inputValue.length <=0 && touched && 'Ingrese un valor'}
                        error={ inputValue.length <=0 && touched }
                        value={inputValue}
                        onChange={onInputChange}
                        onBlur={() => setTouched(true)}
                    />

                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={<SaveOutlinedIcon/>}
                            >
                            Guardar
                        </Button>
                        <Button
                            variant='outlined'
                            color='secondary'
                            onClick={() => setIsAdding(false)}
                        >
                            Cancelar
                        </Button>
                    </Box>

                </>
            ): (
                <>
                    <Button
                        startIcon={<AddCircleOutlineOutlinedIcon/>}
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAdding(true)}
                    >
                        Agregar Tarea
                    </Button>
                </>
            )

        }
    </Box>
  )
}