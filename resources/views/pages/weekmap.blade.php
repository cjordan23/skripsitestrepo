@extends('template.maintemplate')

@push('googleMapJS')
   <script src="{{ asset('/js/maps/pastweekmap.js') }}"></script>
@endpush

@section('content')

   @include('includes.showdata')
   
   <div id="map-container" class="card">
      <div id="map-week" class="card-body">
      </div>
   </div>
   
@endsection

