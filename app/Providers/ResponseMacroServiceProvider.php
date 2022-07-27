<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;

class ResponseMacroServiceProvider extends ServiceProvider
{
    /**
     * Register the application's response macros.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('fileFromStorage', function ($disk, $filepath, $filename) {
            $temp_filepath = tempnam(sys_get_temp_dir(), '');

            $file_data = Storage::disk($disk)->get($filepath);

            file_put_contents($temp_filepath, $file_data);

            return response()
                ->download($temp_filepath, $filename, [], 'inline')
                ->deleteFileAfterSend();
        });
    }
}