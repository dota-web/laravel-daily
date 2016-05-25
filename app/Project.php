<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $table = 'pm_projects';

    public static function getDataByName($name)
    {
        return self::where('name', $name)->orderBy('created_at')->get();
    }

    public static function getName($name)
    {
    }
}
