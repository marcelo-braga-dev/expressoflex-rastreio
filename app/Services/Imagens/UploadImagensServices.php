<?php

namespace App\Services\Imagens;

class UploadImagensServices
{
    public function upload($request, $file, $path = 'images')
    {
        if ($request->hasFile($file)) {
            if ($request->file($file)->isValid()) {
                return $request->$file->store($path);
            }
        }
        return $request->$file;
    }

    public function uploadArray($request, $path = 'images')
    {
        return $request->store($path);
    }
}
