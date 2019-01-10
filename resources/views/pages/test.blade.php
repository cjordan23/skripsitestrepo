@extends('template.maintemplate')

@section('content')
<div class="card">
    <div id="showData" class="card-body">
        <h4 id="showLocation" class="card-title">Location</h4>
        <p class="card-text">Some example text. Some example text.</p>
        <a class="card-link">Magnitude : </a>
        <a id="showMag" class="card-link">Mag</a>
        <a class="card-link">Magnitude Type : </a>
        <a id="showMagType" class="card-link">Mag Type</a>
    </div>
</div>
<div id="map-container" class="card">
    <div id="map" class="card-body">
    </div>
</div>
@endsection

@push('googleMapJS')
    <script src="{{ asset('/js/googlemap/gmap.js') }}"></script>
@endpush
