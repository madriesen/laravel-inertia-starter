<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\CustomerService;
use App\Services\InvoiceService;

/**
 * Get all routes for the dashboard
 */
class DashboardController extends Controller
{

    /**
     * Get the dashboard page
     *
     * @return \Inertia\Response
     */
    function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard');
    }
}
