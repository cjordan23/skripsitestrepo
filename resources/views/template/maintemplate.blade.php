<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1,  shrink-to-fit=no">
        
        <!-- CSRF Token required -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Title -->
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

        <!-- Vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>    
    
        <script src="{{ asset('/js/showdatajq.js') }}"></script>
        <script src="{{ asset('/js/mainjQuery.js') }}"></script>
        <script src="{{ asset('/js/additional/timeanddate.js') }}"></script>

    </head>
    <body id="app" onload="startTime();startDate();">
        
            <!--Navbar -->
            @include('includes.navbar')
            <!-- MAin Content -->
            <div id="main-container" class="container-fluid">
                @yield('content')
            </div>
            <!-- Scripts -->
           
        

        @include('includes.scripts')

    </body>
</html>

