@extends('template.maintemplate')

@push('googleMapJS')
    <script src="{{ asset('/js/maps/pastmonthmap.js') }}"></script>
@endpush

@section('content')
    
   @include('includes.showdata')

   <div id="map-container" class="card">
      <div id="map-month" class="card-body">
      </div>
   </div>
   
@endsection

