import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar
