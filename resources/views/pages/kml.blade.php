@extends('template.maintemplate')

@push('googleMapJS')
    <script src="{{ asset('/js/maps/kml/earthquakekml.js') }}"></script>
@endpush

@section('content')
<div class="container-fluid">
    <h4 class="text-center">KML Map<hr/></h4>
    
    <div class="row">
        <div class="col-md-8 col-sm-12">
            <div id="map-container" class="card">
                <div id="map-kml" class="card-body">
                </div>
            </div>       
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card text-center">
                <div class="card-header">
                    KML Detail Information
                </div>
                <div id="kml-info-container" class="card-body">  
                </div>
                <div class="card-footer text-muted">
                    <strong>Automatic Feeds</strong>
                    These KML feeds will automatically update around 5 by USGS
                </div>
            </div>
        </div>
    </div>
</div>
   
@endsection

