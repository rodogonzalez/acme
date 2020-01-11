@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">                

                <div class="card-body">
                    @if (!is_null($user))
                        <div class="alert alert-success" role="alert">
                            {{ $user->name }}
                        </div>
                    @endif
                    <form action="" id="frm_search" method="post" onsubmit="return false;">
                    @csrf
                    <input type="text"  placeholder="Enter your criteria" v-model="term"> <input type="submit" value="Get"   v-on:click="search_gifs">
                    </form>
                    
                </div>
                Total Items :<h1 >@{{total_count}} record(s) found</h1> 
                <div id="result_giphy" class="card-body">
                <div  class='grid_item' v-for="item in grid_items">
                    <div>
                            <a v-bind:href=item.url >
                                @{{item.title}}<br>
                            
                                <img class="pic_thumb" v-bind:src=item.images.downsized_medium.url /> 
                            
                            </a>    
                        <br><br>
                    </div>
                </div>
                    
                </div>

            </div>
        </div>
    </div>
</div>
 
@endsection
