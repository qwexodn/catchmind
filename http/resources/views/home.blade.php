
@extends('master.default')

@section('css')
<link rel="stylesheet" href="/css/app.css">
@endsection

@section('body')
    <div id="app">
        <content-a></content-a>
    </div>
@endsection

@section('script')
<script src="js/app.js"></script>
<script>
    let sliderImgCnt = document.querySelectorAll(".slider ul li").length;
    
</script>
@endsection