import type { Note } from "../types";

type Props = {
    note: Partial<Note>;  //Partial es para que no sea obligatorio (propiedades que puede no tener la nota)
    onClose: VoidFunction;
    onChange: (field: string, value: string) => void;
    onSave: VoidFunction;
  };
  
  export default function NoteModal({note, onClose, onChange, onSave} : Props){
    return(
    <section 
      style={{
        width: '100vw',
        height: '100vh', 
        position: 'fixed', 
        top:'0', 
        left:'0', 
        display:'flex', 
        alignItems: 'center', 
        justifyContent: 'center'}} 
        className="nes-dialog"
    >
        <div 
            style={{
                backgroundColor: "(0,0,0,0.2)", 
                width: '100%',
                height: '100%',
                position: "absolute"}}
        />
      <form method="dialog" style={{backgroundColor:"white", zIndex: 1, padding: 12, border: '5px solid black'}}>
        <h1 className="title">Create / edit note</h1>
        <div className="nes-field">
          <label htmlFor="title">Title</label>
          <input onChange={(event) => onChange("title", event.target.value)} value={note.title} type="text" id="title" className="nes-input"/>
        </div>
        <div className="nes-field">
          <label htmlFor="content">Content</label>
          <textarea onChange={(event) => onChange("content", event.target.value)} value={note.content} className="nes-textarea" id="content"/>
        </div>
        <div
         style={{
          display: 'flex', 
          marginTop: 24, 
          alignItems: 'center', 
          justifyContent: 'space-between'}}>
          <button className="nes-btn" onClick={onClose}>Close</button>
          <button onClick={onSave} className="nes-btn is-primary">Save</button>
        </div>
      </form>
    </section>
    )
  }