@extends('template.maintemplate')

@section('content')
<ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
   <li class="nav-item">
      <a class="nav-link active" id="infoTable-tab" data-toggle="tab" href="#infoTable" role="tab" aria-controls="infoTable" aria-selected="true">Table Info</a>
   </li>
   <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
   </li>
   <li class="nav-item">
      <a class="nav-link" id="contact-tab" data-toggle="tab" href="#infographic" role="tab" aria-controls="infographic" aria-selected="false">Infographic</a>
   </li>
</ul>
<div class="tab-content" id="myTabContent">
   <div class="tab-pane fade show active" id="infoTable" role="tabpanel" aria-labelledby="infoTable-tab">
      <div class="table-responsive-sm">
            <table class="table">
                  <thead class="bg-info">
                    <tr>
                      <th scope="col">Map Table info</th>
                      <th scope="col">Value</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alert</td>
                      <td>“green”, “yellow”, “orange”, “red”. </td>
                      <td>The alert level from the <a href="https://earthquake.usgs.gov/research/pager/">PAGER earthquake impact scale.</a> </td>
                    </tr>
                    <tr>
                      <td>Location / Place</td>
                      <td>Indonesia/Hawaii/Yellowstone</td>
                      <td>Textual description of named geographic region near to the event. This may be a city name, or a <a href="https://earthquake.usgs.gov/learn/topics/flinn_engdahl.php">Flinn-Engdahl Region name.</a></td>
                    </tr>
                    <tr>
                      <td>Mag</td>
                      <td>From (-1.0) to (10.0)</td>
                      <td>The magnitude for the event in richter scale.</td>
                    </tr>
                    <tr>
                       <td>Type</td>
                       <td>“earthquake”, “quarry”</td>
                       <td>Type of seismic event.</td>
                    </tr>
                    <tr>
                       <td>Sig</td>
                       <td>0 to 1000</td>
                       <td>A number describing how <strong>significant</strong> the event is. Larger numbers indicate a more significant event. This value is determined on a number of factors, including: magnitude, maximum MMI, felt reports, and estimated impact. </td>
                    </tr>
                  </tbody>
                </table>
      </div>
   </div>
   <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
   <div class="tab-pane fade" id="infographic" role="tabpanel" aria-labelledby="infographic-tab">
      <div class='visually_embed'><img class='visually_embed_infographic' src='https://visual.ly/node/image/1254?_w=1440' alt='Earthquake Anatomy' /><div class='visually_embed_cycle'></div><script type='text/javascript' src='https://a.visual.ly/api/embed/1254?width=1440' class='visually_embed_script' id='visually_embed_script_1254'></script><p> From <a href='https://visual.ly?utm_source=content-embed&utm_medium=embed'>Visually</a>.</p></div>
   </div>
</div>
@endsection