<?php


namespace App\Http\Controllers;
use App\Project;
class ProjectController extends Controller
{
    public function getIndex() {
        $data = Project::getDataByName('zhangsan');
        return $data;
    }
}