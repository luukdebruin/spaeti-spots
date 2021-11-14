import React, { useState } from "react"

const Create = () => {
    const [openModal, setOpenModal] = useState(false)
    const [submitForm, setSubmitForm] = useState({ name: undefined, street: undefined, lat: undefined, long: undefined })

    const postRequest = () => {
        console.log(submitForm)
    }

    return (
        openModal ? (
            <div className="absolute w-screen h-full bg-gray-300 bg-opacity-50 flex z-10 justify-center items-center">
                <div className="p-4 w-96 rounded-lg bg-white">
                    <div className="flex flex-col justify-between">
                        <div className="pb-8 flex flex-none flex-row justify-between">
                            <h2 className="font-bold">Create Späti</h2>
                            <div className="cursor-pointer" onClick={() => setOpenModal(false)}>X</div>
                        </div>
                        <div>
                            <div className="pb-4">
                                <label className="pb-2 block">Name</label>
                                <input className="block" type="text" placeholder="Name" onChange={e => setSubmitForm({ ...submitForm, name: e.target.value})}></input>
                            </div>
                            <div className="pb-4">
                                <label className="pb-2 block">Street</label>
                                <input className="block" type="text" placeholder="Street" onChange={e => setSubmitForm({ ...submitForm, street: e.target.value})}></input>
                            </div>
                            <div className="pb-4">
                                <label className="pb-2 block">Lat</label>
                                <input className="block" type="number" placeholder="Lat" onChange={e => setSubmitForm({ ...submitForm, lat: e.target.value})}></input>
                            </div>
                            <div className="pb-4">
                                <label className="pb-2 block">Long</label>
                                <input className="block" type="number" placeholder="Long" onChange={e => setSubmitForm({ ...submitForm, long: e.target.value})}></input>
                            </div>
                            <div className="pb-4">
                                <button onClick={postRequest}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="p-4 bg-white absolute top-0 z-10">
                <button onClick={() => setOpenModal(true)}>Create</button>
            </div>
        )
    )
}

export default Create
