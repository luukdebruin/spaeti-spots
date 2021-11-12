import React, { useState } from "react"

const Create = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        openModal ? (
            <div className="absolute w-screen h-full bg-gray-300 flex z-10 justify-center items-center">
                <div className="p-4 w-96 rounded-lg bg-white">
                    <div className="flex flex-col justify-between">
                        <div className="pb-8 flex flex-none flex-row justify-between">
                            <h2 className="font-bold">Create Späti</h2>
                            <div className="cursor-pointer" onClick={() => setOpenModal(false)}>X</div>
                        </div>
                        <form>
                            <div className="pb-4">
                                <label className="pb-2 block">Name</label>
                                <input className="block" placeholder="Name"></input>
                            </div>
                            <div className="pb-4">
                                <label className="pb-2 block">Street</label>
                                <input className="block" placeholder="Street"></input>
                            </div>
                            <div className="pb-4">
                                <label className="pb-2 block">Lat</label>
                                <input className="block" placeholder="Lat"></input>
                            </div>
                            <div className="pb-4">
                                <label className="pb-2 block">Long</label>
                                <input className="block" placeholder="Long"></input>
                            </div>
                            <div className="pb-4">
                                <input type="submit"></input>
                            </div>
                        </form>
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
