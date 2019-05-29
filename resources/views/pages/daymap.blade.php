@extends('template.maintemplate')

@push('googleMapJS')
   <script src="{{ asset('/js/maps/pastdaymap.js') }}"></script>    
@endpush

@section('content')


   @include('includes.showdata')
    
   <div id="map-container" class="card">
         <div id="map-day" class="card-body">
         </div>
   </div> 
   
@endsection
