@extends('template.maintemplate')

@section('content')
<div id="map-container" class="card">
    <div id="map-kml" class="card-body">
    </div>
</div>
<div id="jumbo" class="jumbotron jumbotron-fuild">
</div>    
@endsection

@push('googleMapJS')
<script src="{{ asset('/js/googlemap/earthquakekml.js') }}"></script>
@endpush