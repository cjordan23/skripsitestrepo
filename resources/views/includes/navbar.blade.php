<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/about">InfoGempabumi</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a href="/daymap" class="nav-link">Today</a>
            </li>
            <li class="nav-item active">
                <a href="/weekmap" class="nav-link">This week</a>
            </li>
            <li class="nav-item active">
                <a href="/monthmap" class="nav-link">This month</a>
            </li>
            <!--Dropdown menu -->
            {{--
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            --}}
        
            <li class="nav-item active">
                <a class="nav-link" href="/kmlmap">KML Map</a>
            </li>
            <li class="nav-item">
                <a href="/infopenting" class="nav-link">Info</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>
        </ul>
        
        <div class="navbar-text">
            Local Date
            <div id="showDate" class="navbar-text"></div>
        </div>
       
        <div class="navbar-text">
            Local Time
            <div id="showTime" class="navbar-text"></div>
        </div>
        <span class="navbar-text">
         ---Prototype---
        </span>
    </div>
</nav>