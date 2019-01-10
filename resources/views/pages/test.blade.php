@extends('template.maintemplate')

@section('content')
<div id="map-container" class="card">
    <div id="map" class="card-body">
    </div>
</div>
<div class="card">
        <div id="showData" class="card-body">
        </div>
</div>
@endsection

@push('googleMapJS')
    <script src="{{ asset('/js/googlemap/gmap.js') }}"></script>
@endpush
