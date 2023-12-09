import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.boardBarHeight} - ${theme.trelloCustom.appBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Box content
    </Box>
  )
}

export default BoardContent
