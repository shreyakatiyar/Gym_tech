import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { membershipPlans } from '../../data/membershipPlans';
import useJoinFlow from '../../hooks/useJoinFlow';
import AnimatedSection from '../AnimatedSection';
import {
  MembershipsContainer,
  MembershipsH1,
  MembershipsWrapper,
  MembershipsCard,
  MembershipsChecks,
  MembershipsIcon,
  MembershipsH2,
  MembershipsP,
  CheckMark,
  DollarSign,
  PopularBadge,
  SelectBtn,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalTitle,
  ModalPrice,
  ModalFeatures,
  ModalActions,
  ModalBtnPrimary,
  ModalBtnSecondary,
} from './MembershipsElements';

const Memberships = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { handleJoinClick } = useJoinFlow();
  const navigate = useNavigate();

  const openModal = (plan) => setSelectedPlan(plan);
  const closeModal = () => setSelectedPlan(null);

  const handleSelectPlan = () => {
    if (selectedPlan) {
      handleJoinClick(selectedPlan.name);
      closeModal();
    }
  };

  return (
    <MembershipsContainer id="memberships">
      <AnimatedSection>
        <MembershipsH1>Flexible plans to fit your lifestyle</MembershipsH1>
      </AnimatedSection>

      <MembershipsWrapper>
        {membershipPlans.map((plan, i) => (
          <AnimatedSection key={plan.id} delay={i * 0.15}>
            <MembershipsCard
              as={motion.div}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(plan)}
              $popular={plan.popular}
            >
              {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
              <MembershipsIcon src={plan.icon} alt={`${plan.name} plan`} loading="lazy" />
              <MembershipsH2>{plan.name}</MembershipsH2>
              <MembershipsChecks>
                {plan.features.map((feature) => (
                  <MembershipsP key={feature}>
                    <CheckMark /> {feature}
                  </MembershipsP>
                ))}
              </MembershipsChecks>
              <MembershipsH2>
                <DollarSign />
                {plan.price.toFixed(2)}
              </MembershipsH2>
              <SelectBtn>Select Plan</SelectBtn>
            </MembershipsCard>
          </AnimatedSection>
        ))}
      </MembershipsWrapper>

      <AnimatePresence>
        {selectedPlan && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              as={motion.div}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalClose onClick={closeModal} aria-label="Close">&times;</ModalClose>
              <ModalTitle>{selectedPlan.name} Membership</ModalTitle>
              <ModalPrice>
                <DollarSign />{selectedPlan.price.toFixed(2)}<span>/month</span>
              </ModalPrice>
              <ModalFeatures>
                {selectedPlan.features.map((f) => (
                  <p key={f}><CheckMark /> {f}</p>
                ))}
              </ModalFeatures>
              <ModalActions>
                <ModalBtnPrimary onClick={handleSelectPlan}>
                  Get Started
                </ModalBtnPrimary>
                <ModalBtnSecondary onClick={() => { closeModal(); navigate('/about#locations'); }}>
                  Find Nearest Gym
                </ModalBtnSecondary>
              </ModalActions>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </MembershipsContainer>
  );
};

export default Memberships;
