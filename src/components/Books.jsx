import {useState} from "react"
import useFetch from "../useFetch"


const Books = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const { data, loading, error } = useFetch("http://localhost:3000/books/allBooks")

    //console.log(data)

    const handleDelete = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:3000/books/delete/${bookId}`, 
                {method: "DELETE"},
            )

            if(!response.ok){
                console.log("Failed to delete.")
            }

            const data = await response.json()
            if(data){
                setSuccessMessage("Movie deleted Successfully.")
                window.location.reload()
            }

        } catch (error) {
            console.log("Failed to delete the book details.", error)
        }
    }

    return (
        <div>
            <ul>
            {data?.map((book) => (
                <li key={book._id} >{book.title}{" "} <button onClick={() => handleDelete(book._id)}>Delete</button> </li>
            ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Books