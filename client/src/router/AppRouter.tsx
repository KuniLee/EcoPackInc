import React, { FC } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Screen from '@/pages/Screen'
import NotFound from '@/pages/NotFound'
import Settings from '@/pages/Settings'

export enum ERoutes {
  Settings = 'settings',
}

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/1" />} />
        <Route path="/:screenId" element={<Screen />} />
        <Route path={ERoutes.Settings} element={<Settings />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
