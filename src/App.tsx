/**
 * NOVA MIND // The Sovereign Learning OS
 * Hyper-Modern Gamified Dopamine Learning Arena (Brilliant + Duolingo + MasterClass)
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { WalletModal } from './components/WalletModal';
import { CyberParticleBackground } from './components/CyberParticleBackground';
import { RoadmapPage } from './pages/RoadmapPage';
import { DiagnosticsPage } from './pages/DiagnosticsPage';
import { VideoPlayer } from './pages/VideoPlayer';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { Settings } from './pages/Settings';
import { SimulationPage } from './pages/SimulationPage';
import { HolographicNeuralGraph } from './pages/HolographicNeuralGraph';
import { UserGamificationState, DiagnosticResult, FrontierFacultyId } from './types';
import { GamifiedStorage } from './lib/gamifiedStorage';
import { soundEngine } from './lib/audio';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => soundEngine.enabled);
  const [activeFacultyId, setActiveFacultyId] = useState<FrontierFacultyId>('deep_it_cyber');

  const [userState, setUserState] = useState<UserGamificationState>(() => {
    return GamifiedStorage.getState();
  });

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.enabled = next;
  };

  const handleCompleteWorkout = (rewardXp: number) => {
    const updated = GamifiedStorage.completeDailyWorkout(rewardXp);
    setUserState(updated);
  };

  const handleCompleteNode = (nodeId: string, xpReward: number) => {
    // Determine next node
    let nextNodeId = 'node_3_one_person_unicorn';
    if (nodeId === 'node_2_outsmart_system') nextNodeId = 'node_3_one_person_unicorn';
    if (nodeId === 'node_3_one_person_unicorn') nextNodeId = 'node_4_ai_swarms';
    if (nodeId === 'node_4_ai_swarms') nextNodeId = 'node_5_capital_matrix';

    const updated = GamifiedStorage.completeNode(nodeId, nextNodeId, xpReward);
    setUserState(updated);
  };

  const handleSaveDiagnosticResult = (result: DiagnosticResult, xpBonus: number) => {
    const updated = GamifiedStorage.saveDiagnosticResult(result, xpBonus);
    setUserState(updated);
  };

  const handleAddXp = (amount: number) => {
    const { state: updated, leveledUp } = GamifiedStorage.addXp(amount);
    if (leveledUp) {
      soundEngine.playLevelUp();
    }
    setUserState(updated);
  };

  const handleUpdateDisplayName = (name: string) => {
    const current = GamifiedStorage.getState();
    const updated: UserGamificationState = {
      ...current,
      displayName: name,
      avatarLetter: name.charAt(0).toUpperCase() || 'T'
    };
    GamifiedStorage.saveState(updated);
    setUserState(updated);
  };

  const handleConnectWallet = (address: string) => {
    const updated = GamifiedStorage.toggleWallet(true, address);
    setUserState(updated);
  };

  const handleDisconnectWallet = () => {
    const updated = GamifiedStorage.toggleWallet(false, undefined);
    setUserState(updated);
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#030511] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-300">
        {/* Subtle Animated Particle Grid Backdrop */}
        <CyberParticleBackground />
        
        {/* Persistent Left Sidebar Navigation */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          userState={userState}
          activeFacultyId={activeFacultyId}
          onSelectFaculty={setActiveFacultyId}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:pl-72 transition-all duration-300 min-w-0">
          
          {/* Top Header with Multi-Faculty Bar and Gamification Status */}
          <Header
            userState={userState}
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            onOpenWalletModal={() => setIsWalletModalOpen(true)}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            activeFacultyId={activeFacultyId}
            onSelectFaculty={setActiveFacultyId}
          />

          {/* Primary Viewport Routing */}
          <main className="flex-1 w-full pb-16">
            <Routes>
              <Route
                path="/"
                element={
                  <RoadmapPage
                    userState={userState}
                    onCompleteWorkout={handleCompleteWorkout}
                    onCompleteNode={handleCompleteNode}
                    activeFacultyId={activeFacultyId}
                    onSelectFaculty={setActiveFacultyId}
                  />
                }
              />
              <Route
                path="/roadmap"
                element={<Navigate to="/" replace />}
              />
              <Route
                path="/curriculum"
                element={<Navigate to="/" replace />}
              />
              <Route
                path="/simulation"
                element={
                  <SimulationPage
                    userState={userState}
                    onAddXp={handleAddXp}
                    initialFacultyId={activeFacultyId}
                  />
                }
              />
              <Route
                path="/neural-graph"
                element={
                  <HolographicNeuralGraph
                    userState={userState}
                    onAddXp={handleAddXp}
                  />
                }
              />
              <Route
                path="/diagnostics"
                element={
                  <DiagnosticsPage
                    userState={userState}
                    onSaveDiagnosticResult={handleSaveDiagnosticResult}
                  />
                }
              />
              <Route
                path="/masterclass"
                element={
                  <VideoPlayer
                    userState={userState}
                    onAddXp={handleAddXp}
                  />
                }
              />
              <Route
                path="/leaderboard"
                element={<LeaderboardPage userState={userState} />}
              />
              <Route
                path="/settings"
                element={
                  <Settings
                    userState={userState}
                    soundEnabled={soundEnabled}
                    onToggleSound={handleToggleSound}
                    onUpdateDisplayName={handleUpdateDisplayName}
                    onOpenWalletModal={() => setIsWalletModalOpen(true)}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

        </div>

        {/* Cryptographic Ledger Modal */}
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
          isConnected={userState.walletConnected}
          walletAddress={userState.walletAddress}
          onConnect={handleConnectWallet}
          onDisconnect={handleDisconnectWallet}
        />

      </div>
    </BrowserRouter>
  );
}
