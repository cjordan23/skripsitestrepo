@extends('template.maintemplate')

@push('googleMapJS')
    <script src="{{ asset('/js/maps/homePageMap.js') }}"></script>
@endpush

@section('content')

    <div class="container-fluid">
        <div class="row">
            @include('includes.showdata')
        </div>
        <div class="row">
            <div id="map-container" class="card">
                <div id="map-home" class="card-body">
                </div>
            </div>
        </div>
    </div>  

    
@endsection
