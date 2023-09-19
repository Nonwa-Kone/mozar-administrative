import React from 'react'
import { AiOutlineForm } from 'react-icons/ai';
import { MdOutlineTimer } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { RiTodoLine } from 'react-icons/ri';
const CommentSaMarche = () => {
  return (
    <>
    <h1>Comment ça marche?</h1>
    <div className="col-lg-3 col-md-3 col-sm-12 p-5">
        <div className="card-body d-flex justify-content-center gap-3">
        <AiOutlineForm className='fs-1'/>
        <h5>Remplir le formualaire</h5>
        </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 p-5">
        <div className="card-body d-flex justify-content-center gap-3">
        <MdOutlineTimer className='fs-1'/>
        <h5>Dossier verifié en 24h</h5>
        </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 p-5">
        <div className="card-body d-flex justify-content-center gap-3">
        <FaUserGraduate className='fs-1'/>
        <h5>Dossier validé par le greffe</h5>
        </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 p-5">
        <div className="card-body d-flex justify-content-center gap-3">
        <RiTodoLine className='fs-1'/>
        <h5>Réception du RCCM</h5>
        </div>
    </div>
    </>
  )
}

export default CommentSaMarche