import React from 'react'

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="">Navigation menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample02">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-link active">
                            <a class="nav-link active" aria-current="page" href="home">Home</a>
                        </li>
                        <li class="nav-link active">
                            <a class="nav-link active" aria-current="page" href="about">About</a>
                        </li>
                        <li class="nav-link active">
                            <a class="nav-link active" aria-current="page" href="contactus">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
