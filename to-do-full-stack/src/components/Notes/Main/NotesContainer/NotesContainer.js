import React from 'react'
import './NotesContainer.css'
import { AnimatePresence, motion } from "framer-motion";
import ScratchPad from '../../ScratchPad/ScratchPad';
function NotesContainer({notes}) {
    const data = notes.map(note=>{
        return <motion.div 
                initial={{scale:0}}
                animate={{scale:1}} 
                exit={{scale:0}}
                whileHover={{scale:1.06}}
                key={note.id}
                className="single-note"
                >
                    {note.mainNote}
                </motion.div>
    })
    return (
        <div className="container-right" >
            <div className="notes-heading">NeverNote</div>
            <motion.div
                animate={{scale:1}}
                initial={{scale:0.7}}
                transition={{duration:0.7}}
                className="notes-container">
                {data.length===0
                    ?<p style={{margin:"auto"}}>Add Notes</p>
                    :<AnimatePresence>{data}</AnimatePresence>
                }
            </motion.div>
            <ScratchPad/>
        </div>
    )
}

export default NotesContainer
