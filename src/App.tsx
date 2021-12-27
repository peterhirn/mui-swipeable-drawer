import { FC, useState } from "react"
import { SwipeableDrawer } from "@mui/material"

interface DrawerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Drawer: FC<DrawerProps> = ({ open, setOpen, children }) => (
  <SwipeableDrawer
    open={open}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    disableDiscovery={false}
    disableSwipeToOpen={false}
  >
    {children}
  </SwipeableDrawer>
)

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer open={open} setOpen={setOpen}>
        <div style={{ width: "200px" }}>Drawer</div>
      </Drawer>

      <p onClick={() => setOpen(true)}>Open Drawer</p>
    </>
  )
}

export default App
